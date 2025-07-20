import type { OrbitGroup } from "@/components/tech-stack-orbit/models/techStackOrbitsAndIcons.model";
import TailwindcssLogo from "@/assets/stack-logos/TailwindCssLogo.svg"
import TypeScriptLogo from "@/assets/stack-logos/TypeScriptLogo.svg";
import ReactLogo from "@/assets/stack-logos/ReactJsLogo.svg";
import ReduxLogo from "@/assets/stack-logos/ReduxLogo.svg";
import NodeJSLogo from "@/assets/stack-logos/NodeJsLogo.svg";
import NestJsLogo from "@/assets/stack-logos/NestJsLogo.svg";
import PrismaLogo from "@/assets/stack-logos/PrismaLogo.svg";
import DockerLogo from "@/assets/stack-logos/DockerLogo.svg";
import LinuxLogo from "@/assets/stack-logos/ArchLinuxLogo.svg";

export type PrepareOrbitGroupsProps = {
    width: number;
    height: number;
}

export const prepareOrbitGroups = (props: PrepareOrbitGroupsProps):OrbitGroup[] => {
    const { width, height } = props;
    const cx = width / 2;
    const cy = height / 2;
    const maxRadius = Math.min(cx, cy) * 0.9;
    const iconSize = Math.min(width, height) * 0.07;

    const radiis = {
        frontEndOrbit: maxRadius * 0.9,
        backendOrbit: maxRadius * 0.6,
        devopsOrbit: maxRadius * 0.3,
    };

    const orbitGroups: OrbitGroup[] = [
        {
            orbit: {
                centerX: cx,
                centerY: cy,
                radius: radiis.frontEndOrbit,
                groupAnimationDuration:7,
            },
            orbitIcons: [
                {
                    centerX: cx,
                    centerY: cy,
                    radius: radiis.frontEndOrbit,
                    size: iconSize,
                    imageSrc: ReactLogo,
                },

                {
                    centerX: cx,
                    centerY: cy,
                    radius: radiis.frontEndOrbit,
                    size: iconSize,
                    imageSrc: TypeScriptLogo,
                },

                {
                    centerX: cx,
                    centerY: cy,
                    radius: radiis.frontEndOrbit,
                    size: iconSize,
                    imageSrc: TailwindcssLogo,
                },

                {
                    centerX: cx,
                    centerY: cy,
                    radius: radiis.frontEndOrbit,
                    size: iconSize,
                    imageSrc: ReduxLogo,
                },
            ],
        },
        {
            orbit: {
                centerX: cx,
                centerY: cy,
                radius: radiis.backendOrbit,
                groupAnimationDuration:6
            },
            orbitIcons: [
                {
                    centerX: cx,
                    centerY: cy,
                    radius: radiis.backendOrbit,
                    size: iconSize,
                    imageSrc: NodeJSLogo,
                },

                {
                    centerX: cx,
                    centerY: cy,
                    radius: radiis.backendOrbit,
                    size: iconSize,
                    imageSrc: NestJsLogo,
                },

                {
                    centerX: cx,
                    centerY: cy,
                    radius: radiis.backendOrbit,
                    size: iconSize,
                    imageSrc: PrismaLogo,
                },
            ],
        },
        {
            orbit: {
                centerX: cx,
                centerY: cy,
                radius: radiis.devopsOrbit,
                groupAnimationDuration:5
            },
            orbitIcons: [
                {
                    centerX: cx,
                    centerY: cy,
                    radius: radiis.devopsOrbit,
                    size: iconSize,
                    imageSrc: DockerLogo,
                },
                {
                    centerX: cx,
                    centerY: cy,
                    radius: radiis.devopsOrbit,
                    size: iconSize,
                    imageSrc: LinuxLogo,
                },
            ],
        },
    ];

    return orbitGroups;
}