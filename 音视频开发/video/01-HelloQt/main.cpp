#include "mainwindow.h"

#include <QApplication>


// 在QT中 .pro文件主要是配置文件 用来配置QT项目的一些情况
int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    MainWindow w;
    w.show();
    return a.exec();
}
