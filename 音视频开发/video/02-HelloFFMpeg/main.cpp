#include "mainwindow.h"
#include <QApplication>
#include <QDebug>

extern "C" {
    #include <libavcodec/avcodec.h>
}

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    MainWindow w;
    w.show();
    // 打印输出ffmpeg版本信息
    qDebug() << av_version_info();
    return a.exec();
}
