/* Copyright 2015 QReal Research Group
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License. */
 
// Скорее всего, этот скрипт не работает. Нужно посмотреть примеры из guiTests.
// И api.hints() (и так далее) достаточно вызывать один раз. TODO: переделать.
var mainWindow = api.ui().mainWindow();
api.changeWindow(mainWindow);
api.hints().addHint("Добро пожаловать в среду визуального программирования QReal:Robots!", 1300, mainWindow);//api.hints() -> 'ui'
api.wait(1500);
api.hints().addHint("Сейчас мы нарисуем одну диаграмму за вас, чтобы показать, как все работает.", 1300, mainWindow);
api.wait(1500);
var newDiagram = api.ui().widget("QToolButton", "actionNew_Diagram");
api.hints().addHint("Сперва создадим новую диаграмму...", 2000, mainWindow);
api.cursor().moveTo(newDiagram, 1000);
api.cursor().leftButtonPress(newDiagram);
api.cursor().leftButtonRelease(newDiagram, 400);
var sensors = api.ui().widget("QComboBox", "Port D1 DeviceConfig");
var s = api.ui().widget("QScrollArea", "");
api.scroll(s, sensors);
initNodes = api.scene().nodeList("RobotsDiagram", "InitialNode");
var init = initNodes[0];
var mainScene = api.ui().sceneViewport();
api.hints().addHint("Добавим пару блоков из палитры на сцену...", 1000, mainWindow);
var engF = api.palette().dragPaletteElement("qrm:/RobotsMetamodel/RobotsDiagram/TrikV6EnginesForward", 500, 150, 275);
var sonar = api.palette().dragPaletteElement("qrm:/RobotsMetamodel/RobotsDiagram/TrikWaitForSonarDistance",  500, 250, 275);
api.hints().addHint("Отредактируем их свойства...", 3000, mainWindow);
var prop1 = api.ui().propertyRect("Считанное значение");
var prop = api.ui().propertyRect("Расстояние");
api.cursor().moveToRect(prop1, 1000);
var propertyEditor = api.ui().propertyEditor();
api.cursor().leftButtonPress(propertyEditor);
api.cursor().leftButtonRelease(propertyEditor, 50);
api.cursor().leftButtonPress(propertyEditor);
var val = api.ui().property("Считанное значение");
api.cursor().leftButtonPress(val);
api.cursor().leftButtonRelease(val, 50);
api.pickComboBoxItem(val, "меньше", 1000);
api.cursor().moveToRect(prop, 1000);
api.cursor().leftButtonPress(propertyEditor);
api.cursor().leftButtonRelease(propertyEditor);
api.keyboard().type("10", 1000);
api.hints().addHint("Еще пару блоков...", 5000, mainWindow);
var engB = api.palette().dragPaletteElement("qrm:/RobotsMetamodel/RobotsDiagram/TrikV6EnginesBackward", 2000, 350, 275);
var beep = api.palette().dragPaletteElement("qrm:/RobotsMetamodel/RobotsDiagram/TrikSadSmile", 2000, 450, 275);
var timer = api.palette().dragPaletteElement("qrm:/RobotsMetamodel/RobotsDiagram/Timer", 2000, 350, 100);
api.hints().addHint("Теперь нарисуем связи между блоками на сцене...", 5000, mainWindow);
api.scene().drawLink(init, engF, 1000);
api.scene().drawLink(engF, sonar, 1000);
api.scene().drawLink(sonar, engB, 1000);
api.scene().drawLink(engB, beep, 1000);
api.scene().drawLink(beep, timer, 1000);
api.scene().drawLink(timer, engF, 1000);
api.hints().addHint("Добавим роботу сенсор расстояния...", 2000, mainWindow);
var sensors = api.ui().widget("QComboBox", "Port D1 DeviceConfig");
var s = api.ui().widget("QScrollArea", "");
api.cursor().moveTo(sensors, 1000);
api.cursor().leftButtonPress(sensors);
api.cursor().leftButtonRelease(sensors, 50);
api.pickComboBoxItem(sensors, "Ультразвуковой сенсор", 1000);
var open2DModel = api.ui().pluginActionToolButton("show2dModelTrik");
api.hints().addHint("Можно посмотреть, что получилось.", 3000, mainWindow);
api.cursor().moveTo(open2DModel, 3000);
api.cursor().leftButtonPress(open2DModel);
api.cursor().leftButtonRelease(open2DModel, 500);
var widget = api.pluginUi("qRealRobots.RobotsPlugin").d2ModelWidget();
api.changeWindow(widget);
api.hints().addHint("Осталось нарисовать препятствие для робота...", 3000, widget);
var wall = api.pluginUi("qRealRobots.RobotsPlugin").widget("QPushButton", "wallButton");
api.cursor().moveTo(wall, 1000);
api.cursor().leftButtonPress(wall);
api.cursor().leftButtonRelease(wall);
var scene = api.pluginUi("qRealRobots.RobotsPlugin").d2ModelSceneViewport();
api.cursor().sceneMoveTo(scene, 2000, 400, 0);
api.cursor().rightButtonPress(scene);
api.cursor().sceneMoveTo(scene, 1000, 400, 400);
api.cursor().rightButtonRelease(scene);
api.hints().addHint("А теперь, запуск!", 5000, widget);
var run = api.pluginUi("qRealRobots.RobotsPlugin").widget("QPushButton", "runButton");
api.cursor().moveTo(run, 1000);
api.cursor().leftButtonPress(run);
api.cursor().leftButtonRelease(run);
