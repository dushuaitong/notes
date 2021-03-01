# iOS开发统一环境配置

## 1. Ruby工具链

- Xocode 版本统一

  如果电脑上安装了多个版本的Xcode 在使用之前要先 xcode-select-s选择该项目对应的xcode版本

- Ruby 版本统一管理

  - 为了方便统一Ruby版本 目前Ruby环境的管理工具有RVM和rebenv 推荐使用rebenv 因为它使用 shims 文件夹来分离各个 Ruby 版本，相对于 RVM 更加轻装而方便使用 团队内部要使用统一的ruby版本管理工具

    > rbenv 是 Ruby 环境管理工具，能够安装、管理、隔离以及在多个 Ruby 版本之间切换。要使用 rbenv，我们可以通过 Homebrew 来安装它

  - rebenv安装 第一步安装homebrew

    ```shell
    $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
    brew install rbenv ruby-build rbenv-vars
    ```

    > 安装完毕后需要放到Shell的配置文件里边 如 ~/.bash_profile 或者 ~/.zshrc 等文件

    ```shell
    export PATH="$HOME/.rbenv/bin:$PATH" 
    eval "$(rbenv init -)"
    ```

  - 安装和设置项目的Ruby环境

    ```shell
    $ cd $(PROJECT_DIR)
    $ rbenv install 2.7.1
    $ rbenv local 2.7.1
    ```

    > 如果要更新版本，可以通过rbenv local命令进行

- RubyGems和Bundler

  - RubyGems 和 Bundler 主要是用来安装和管理 CocoaPods 和 fastlane 等第三方工具

  - 具体来说，RubyGems 是 Ruby 依赖包管理工具。在 Ruby 的世界，包叫作 Gem，我们可以通过gem install命令来安装。但是 RubyGems 在管理 Gem 版本的时候有些缺陷，就有人开发了 Bundler，用它来检查和安装 Gem 的特定版本，以此为 Ruby 项目提供一致性的环境。

  - 要安装 Bundler，我们可执行gem install bundler命令进行，之后，再执行bundle init就可以生成一个 Gemfile 文件，像 CocoaPods 和 fastlane 等依赖包，我们就可以添加到这个文件里面

  ```shell
  source "https://rubygems.org"
  gem "cocoapods", "1.10.0"
  gem "fastlane", "2.166.0"
  ```

  > 注意我们在gem命令里面都指定了依赖包的特定版本号

​      然后执行bundle install来安装各个 Gem。 Bundler 会自动生成一个 Gemfile.lock 文件来锁定所安装的 Gem 的版本

​	   为了保证团队其他成员都可以使用版本号一致的 Gem，我们需要把 Gemfile 和 Gemfile.lock 一同保存到 Git 里面统一管理起来

	- 	到此为止，我们已经知道怎样使用 Ruby 工具链配置一个统一的开发环境。但在真实的开发环境中，搭建环境只需要一个人来完成即可，其他成员执行以下脚本就能完成整套开发环境的搭建 ` ./scripts/setup.sh`

```shell
# Install ruby using rbenv
ruby_version=`cat .ruby-version`
if [[ ! -d "$HOME/.rbenv/versions/$ruby_version" ]]; then
  rbenv install $ruby_version;
fi
# Install bunlder
gem install bundler
# Install all gems
bundle install
# Install all pods
bundle exec pod install
```

该脚本主要做了四件事情，第一步是在 rbenv 下安装特定版本的 Ruby 开发环境，然后通过 RubyGems 安装 Bunlder，接着使用 Bundler 安装 CocoaPods 和 fastlane 等依赖包，最后安装各个 Pod。这样，一个统一的项目环境就搭建完成了

- gitignore文件   在这里查找 gitignore.io

## 语义化版本号

- 版本号由4位组成 MAJOR、MINOR、PATCH、BUILD  如：1.2.3.4
  	-   MAJOR 是指主版本号，通常在重大更新的时候才会需要更新主版本号。例如 iOS 每年都会更新一个主版本号。而对于第三方库来说，主版本号的更新，表示该库的 API 新增了重大功能，或者引入了不可兼容的更新 
  	-   MINOR 是指副版本号，用于小功能的改善。例如 iOS 14 在发布主版本后，在一年内可能发布多个副版本如 14.1、 14.2 来完善其系统功能。一般对于第三方库来说，副版本的更新就是新增一些 API，但不包含不可兼容的更新
  	-   PATCH 是指补丁版本号，一般用于 bug fix 以及修复安全性问题等。对于第三方库来说，补丁版本号的更新也不应该有不可兼容的更新。虽然实际操作中这会有些困难，但我们可以通过把原有 API 标记为 deprecated，或者为新 API 参数提供默认值等办法来解决
  	-   BUILD 是指构建版本号，通常在内部测试时使用。一般当我们使用 CI 服务器进行自动构建时，构建版本号会自动更新

## Pod

- pod 慢 `source 'https://cdn.cocoapods.org/' `  source需要指向 CocoaPods Master Repo

- project 和 workspace

  - project用于指定我们的主项目文档。该项目文档会使用到 CocoaPods 管理的所有第三方依赖库
  - workspace用于指定要生成和更新的 Workspace 文档。和其他依赖库管理工具不一样，CocoaPods 会自动生成一个 Workspace 文档，然后我们只能使用该文档而不是 Xcode 项目文档来进行后续开发

  ```shell
  project './Moments/Moments.xcodeproj'
  workspace './Moments.xcworkspace'
  ```

- platform 和 use_frameworks

  ```shell
  platform :ios, '14.0' ## 系统最低版本
  use_frameworks! ## 这一配置会让 CocoaPods 把所有第三方依赖库打包生成一个动态加载库，而不是静态库。因为动态库是我们经常用到的，它能有效地加快编译和链接的速度
  ```

- 组织同类型的第三方依赖库

  ```shell
  def dev_pods
    pod 'SwiftLint', '0.40.3', configurations: ['Debug']
    pod 'SwiftGen', '6.4.0', configurations: ['Debug']
  end
  ## def dev_pods end代码块是“复用同一类依赖库方式”的意思，我们可以把同类型的依赖库都放进这个代码块里面
  ```

- target 配置

  ```shell
  target 'Moments' do
    dev_pods
    core_pods
    # other pods...
  end
  ```

- 依赖库版本

```shell
pod 'RxSwift', '= 5.1.1'
```

> 0.1表示大于 0.1 的任何版本，这样可以包含 0.2 或者 1.0；

>= 0.1表示大于或等于 0.1 的任何版本；

​		< 0.1表示少于 0.1 的任何版本；

​		<= 0.1表示少于或等于 0.1 的任何版本；

​		~> 0.1.2表示大于 0.1.2 而且最高支持 0.1.* 的版本，但不包含 0.2 版本。

- 内部依赖库

  pod 'DesignKit', :path => './Frameworks/DesignKit', :inhibit_warnings => false

- CocoaPods 已经为我们提供了pod outdated命令，我们可以用它一次查看所有 Pod 的最新版本，而无须到 GitHub 上逐一寻找

- 一般不要使用pod update 命令 会更新所有的本地仓库库

