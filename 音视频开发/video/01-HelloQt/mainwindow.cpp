#include "mainwindow.h"
#include <QPushButton>
#include <QDebug>
#include <QtGlobal>
#include <iostream>

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
{
    // 设置固定窗口大小 不允许鼠标拖动
//    setFixedSize(300, 300);
    // 设置窗口大小 允许鼠标拖动
    resize(600, 800);
    // 设置窗口标题
    setWindowTitle("这是一个主窗口");
    // 设置窗口位置 默认是按照屏幕左上角为坐标原点
    move(100, 100);

    // 在这里new 出来的控件是不需要delete的 因为QT内部会帮我们自动进行释放
    QPushButton *btn = new QPushButton;
    btn->setText("这是一个按钮");
    btn->resize(200, 200);
    btn->setParent(this);
//    btn->show();

    QPushButton *btn2 = new QPushButton("注册", this);
    btn2->resize(60, 60);
    btn2->move(200,200);

     // QT的打印输出做好都用QtDebug
     qDebug() << "Hello Word";
     std::cout << "Hello wrod" << std::endl;
}

MainWindow::~MainWindow()
{
}

