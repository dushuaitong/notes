QT       += core gui

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

CONFIG += c++11

# You can make your code fail to compile if it uses deprecated APIs.
# In order to do so, uncomment the following line.
#DEFINES += QT_DISABLE_DEPRECATED_BEFORE=0x060000    # disables all the APIs deprecated before Qt 6.0.0

SOURCES += \
    main.cpp \
    mainwindow.cpp

HEADERS += \
    mainwindow.h

FORMS += \
    mainwindow.ui

# Default rules for deployment.
qnx: target.path = /tmp/$${TARGET}/bin
else: unix:!android: target.path = /opt/$${TARGET}/bin
!isEmpty(target.path): INSTALLS += target

INCLUDEPATH += ../ffmpeg/include
LIBS += -L ../ffmpeg/lib \
        -lavcodec.58.91.100 \
        -lavdevice.58.10.100 \
        -lavfilter.7.85.100 \
        -lavformat.58.45.100 \
        -lavresample.4.0.0 \
        -lavutil.56.51.100 \
        -lpostproc.55.7.100 \
        -lswresample.3.7.100 \
        -lswscale.5.7.100


