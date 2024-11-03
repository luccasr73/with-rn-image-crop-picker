"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("expo/config-plugins");
const withUpdateAndroidManifest_1 = require("./android/withUpdateAndroidManifest");
const withUpdateAppBuildGradle_1 = require("./android/withUpdateAppBuildGradle");
const withUpdateProjectBuildGradle_1 = require("./android/withUpdateProjectBuildGradle");
const withUpdateInfoPlist_1 = require("./ios/withUpdateInfoPlist");
const pkg = require("../../package.json");
const withImageCropPicker = (config, { PhotoLibraryUsageDescription, CameraUsageDescription, MicrophoneUsageDescription, } = {}) => {
    return (0, config_plugins_1.withPlugins)(config, [
        [
            withUpdateInfoPlist_1.updateInfoPlist,
            {
                photolibText: PhotoLibraryUsageDescription,
                cameraText: CameraUsageDescription,
                microText: MicrophoneUsageDescription,
            },
        ],
        withUpdateProjectBuildGradle_1.addMavenRepositoriesOnProjectBuildGradle,
        withUpdateAppBuildGradle_1.updateAppBuildGradle,
        withUpdateAndroidManifest_1.addManifestPermissions,
    ]);
};
exports.default = (0, config_plugins_1.createRunOncePlugin)(withImageCropPicker, pkg.name, pkg.version);
