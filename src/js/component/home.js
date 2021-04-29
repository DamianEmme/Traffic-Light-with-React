import React, { useState } from "react";
import { Semaforo } from "./semaforo";
export function Home() {
	//      variable , funciona que va actualizar
	return (
		<div className="d-flex justify-content-center">
			<Semaforo />
		</div>
	);
}
