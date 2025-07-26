export interface Orbit {
    name:string;
    centerX: number;
    centerY: number;
    radius: number;
    groupAnimationDuration?: number;
}

export interface OrbitIcon{
    centerX: number;
    centerY: number;
    radius: number;
    size: number;
    imageSrc: string;
}

export interface OrbitGroup {
    orbit:Orbit;
    orbitIcons: OrbitIcon[];
}