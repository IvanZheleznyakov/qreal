#pragma once

#include <QtCore/QObject>

#include <interpreterBase/kitPluginInterface.h>
#include <interpreterBase/robotModel/commonRobotModel.h>

namespace qrTest {
namespace mockKitPlugin1 {

class MockKitPlugin1Interface : public QObject, public interpreterBase::KitPluginInterface
{
	Q_OBJECT
	Q_INTERFACES(interpreterBase::KitPluginInterface)
	Q_PLUGIN_METADATA(IID "mockKitPlugin1.MockKitPlugin1Interface")

public:
	QString kitId() const override;

	QString friendlyKitName() const override;

	interpreterBase::robotModel::RobotModelInterface *realRobotModel() override;

	// Transfers ownership.
	QWidget *settingsWidget() const override;

	qReal::IdList unsupportedBlocks() const override;

	// Transfers ownership.
	// QList<QWidget *> toolWidgets() const override;

private:
	interpreterBase::robotModel::CommonRobotModel mRobotModel;
};

}
}