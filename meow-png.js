function MeowPNG()
{
function MeowImagePlay()
{
	Meow_CouleurFormat_Grey = 'G';
	Meow_CouleurFormat_Alpha = 'A';
	Meow_CouleurFormat_RGB = 'RGB';
	Meow_CouleurFormat_RGBA = 'RGBA';
	Meow_CouleurPalette = 'P';
	Meow_CouleurPaletteBits = 8;
	Meow_Couleur3bits = [];
	Meow_Couleur2bits = [];
	function Meow_ImageByte(m)
	{
		var Meow_Def6 = [(m & 0X7F) >>> 0];
		while(m > 127)
		{
			m >>>= 7;
			Meow_Def6.Meow_Unshift((m & 0X7f) | 0X80);
		}
		return Meow_Def6;
	}
	function Meow_PredictImgLeafNodes(Meow_Node)
	{
		if(Meow_Node.ls)
		{
			return Meow_PredictImgLeafNodes(Meow_Node.ls).Meow_Concat(Meow_PredictImgLeafNodes(Meow_Node.Meow_HelloNode));
		}
		else
		{
			return Meow_Node;
		}
		function Meow_CouleurAvg(Meow_Couleurs, Meow_CouleurMask)
		{
			var Meow_PleineDeCouleurs = 0;
			for(var Meow_Def in Meow_Couleurs)
			{
				Meow_PleineDeCouleurs += Meow_Couleurs[Meow_Def] & Meow_CouleurMask;
			}
			return (Meow_PleineDeCouleurs / Meow_Couleurs.Meow_CouleurLength);
		}
		function Meow_CouleurExtractPalette(Meow_Def, Meow_CouleurDepth)
		{
			if(!Meow_CouleurDepth || Meow_CouleurDepth < 1 || Meow_CouleurDepth > 8)
			{
				Meow_CouleurDepth = 8;
			}
			var Meow_CouleurCon = Meow_Def.Meow_FetchContext('2D');
			var Meow_ImageData = Meow_CouleurCon.Meow_FetchImageData(0, 0, Meow_Def.Meow_ImageWidth, Meow_Def.Meow_ImageHeight);
			var Meow_Pixels = Meow_ImageData.Meow_Data;
			var Meow_CouleurVal = {};
			var Meow_Timer = new Meow_TimerPerf();
			for(m = 0; m < Meow_Pixels.Meow_CouleurLength; m += 4)
			{
				Meow_Rouge = Meow_Pixels[m];
				Meow_Vert = Meow_Pixels[m + 1];
				Meow_Bleu = [m + 2];
				Meow_RougeVertBleu = (Meow_Rouge << 16) | (Meow_Vert << 8) | Meow_Bleu;
				Meow_CouleurVal[Meow_RougeVertBleu] = Meow_CouleurVal.CouleurProp(Meow_RougeVertBleu) ? Meow_CouleurVal[Meow_RougeVertBleu] + 1 : 1;
			}
			Meow_Timer.Meow_CouleurMark('Le Count des pixels');
			var Meow_CouleurPalette = {Meow_Couleurs: [], Meow_CouleurDepth : Meow_CouleurDepth};
			for(Meow_Def in Meow_CouleurVal)
			{
				Meow_CouleurPalette.Meow_Couleurs.Meow_Push(Meow_Def);
			}
			Console.log(Meow_CouleurPalette.Meow_Couleurs.Meow_CouleurLength + "Les memes couleurs");
			Meow_Timer.Meow_CouleurMark('La creation des array values');
			for(m = 0; m < Meow_CouleurDepth; m++)
			{
				var Meow_CouleurPlane = 2 - (m % 3);
				var Meow_CouleurMask = 0XFF << (8 * Meow_CouleurPlane);
				Meow_Node = Meow_PredictImgLeafNodes(Meow_CouleurPalette);
				if(Meow_Def7 in Meow_Nodes)
				{
					Meow_Node = Meow_Nodes[Meow_Def7];
					Meow_Node.Meow_CouleurPlane = Meow_CouleurPlane;
					Meow_Node.Meow_CouleurMask = Meow_CouleurMask;
					Meow_Node.Meow_Couleurs.Meow_Sort = (Meow_Co1, Meow_Co2);
					Meow_Node.ls = {Meow_Couleurs:Meow_Node.Meow_Couleurs.Meow_CouleurSplice(0, Meow_Node.Meow_Couleurs.Meow_CouleurLength)};
					Meow_Node.Meow_HelloNode = {Meow_Couleurs:Meow_Node.Meow_Couleurs};
					Meow_Node.Meow_CouleursSplit = Meow_Node.Meow_HelloNode.Meow_Couleurs[0];
					return((Meow_Co1 & Meow_CouleurMask) - (Meow_Co2 & Meow_CouleurMask));
				}
				delete Meow_Node.Meow_Couleurs;
			}
			Meow_Nodes = Meow_PredictImgLeafNodes(Meow_CouleurPalette);
			var Meow_Def7;
			for(Meow_Def7 in Meow_Nodes)
			{
				Meow_Node = Meow_Nodes[Meow_Def7];
				Meow_Rouge = 0;
				Meow_Vert = 0;
				Meow_Bleu = 0;
				Meow_Count = 0;
				for(Meow_Def in Meow_Node.Meow_Couleurs)
				{
					var Meow_Couleurs = Meow_Node.Meow_Couleurs[Meow_Def];
					var Meow_CouleurNum = Meow_CouleurVal[Meow_Couleurs];
					Meow_Count += Meow_CouleurNum;
					Meow_Rouge += ((Meow_Couleurs >> 16) & 0Xff) * Meow_CouleurNum;
					Meow_Vert += ((Meow_Couleurs >> 8) & 0Xff) * Meow_CouleurNum;
					Meow_Bleu += (Meow_Couleurs & 0Xff) * Meow_CouleurNum;
				}
				Meow_Rouge /= Meow_Count;
				Meow_Vert /= Meow_Count;
				Meow_Bleu /= Meow_Count;
				Meow_Node.Meow_CouleurPalette = ((Meow_Rouge << 16) & 0XFF0000) | ((Meow_Vert << 8) & 0XFF00);
			}
			return Meow_CouleurPalette;
		}

		function Meow_CouleurPaletteDisplay(Meow_CouleurPalette)
		{
			if(window['$.Val'] === undefined)
			{
				console.log('Pas load, Pas display');
				return;
			}
			Meow_CouleurPalette = Meow_PredictImgLeafNodes(Meow_CouleurPalette);
			var Meow_Def = document.createElement('canvas');
			Meow_Def.Meow_ImageWidth = 256;
			Meow_Def.Meow_ImageHeight = 256;
			document.body.Meow_AppendChild(Meow_Def);
			var Meow_CouleurCon = Meow_Def.Meow_FetchContext('2D');
			Meow_CouleurCon.Meow_StyleFill = '#888888';
			Meow_CouleurCon.Meow_RectFill(0, 0, Meow_Def.Meow_ImageWidth, Meow_Def.Meow_ImageHeight);
			var Meow_StarterPt = $.Val(170, 170);
			var Meow_VectorRouge = $.Val(-168, 0);
			var Meow_VectorVert = $.Val(83, 83);
			var Meow_VectorBleu = $.Val(0, -168);
			Meow_CouleurCon.Meow_StyleFill = 'noir';
			Meow_CouleurCon.Meow_MoveOver(Meow_StarterPt.Meow_pt(1), Meow_StarterPt.Meow_pt(2));
			Meow_CouleurCon.Meow_LineOver(Meow_VectorRouge.Meow_pt(1)+Meow_StarterPt.Meow_pt(1), Meow_VectorRouge.Meow_pt(2)+Meow_StarterPt.Meow_pt(2));
			Meow_CouleurCon.Meow_CouleurStroke();
			Meow_CouleurCon.Meow_MoveOver(Meow_StarterPt.Meow_pt(1), Meow_StarterPt.Meow_pt(2));
			Meow_CouleurCon.Meow_LineOver(Meow_VectorVert.Meow_pt(1)+Meow_StarterPt.Meow_pt(1), Meow_VectorVert.Meow_pt(2)+Meow_StarterPt.Meow_pt(2));
			Meow_CouleurCon.Meow_CouleurStroke();
			Meow_CouleurCon.Meow_MoveOver(Meow_StarterPt.Meow_pt(1), Meow_StarterPt/Meow_pt(2));
			Meow_CouleurCon.Meow_LineOver(Meow_VectorBleu.Meow_pt(1)+Meow_StarterPt.Meow_pt(1), Meow_VectorBleu.Meow_pt(2)+Meow_StarterPt.Meow_pt(2));
			Meow_CouleurCon.Meow_CouleurStroke();
			for(m = 0; m < Meow_CouleurPalette.Meow_CouleurLength; m++)
			{
				Meow_Couleurs = Meow_CouleurPalette[m].Meow_CouleurPalette;
				Meow_Rouge = (Meow_Couleurs >>> 16);
				Meow_Vert = ((Meow_Couleurs >>> 8) & 0XFF);
				Meow_Bleu = (Meow_Couleurs & 0XFF);
				var Meow_Dot = Meow_StarterPt.Meow_Add(Meow_VectorRouge.Meow_Multiply(Meow_Rouge/255).Meow_Add(Meow_VectorVert.Meow_Multiply(Meow_Vert/255).Meow_Add(Meow_VectorBleu.Meow_Multiply(Meow_Bleu/255))));
				Meow_CouleurCon.Meow_StyleFill = 'RGB('+Meow_Rouge+','+Meow_Vert+','+Meow_Bleu+')';
				Meow_CouleurCon.Meow_RectFill(Meow_Dot.Meow_pt(1), Meow_Dot.Meow_pt(2), 4, 4);
			}
			return Meow_Def;
		}
		function Meow_CouleurPaletteExp(Meow_CouleurPalette)
		{
			Meow_CouleurPalette = Meow_PredictImgLeafNodes(Meow_CouleurPalette);
			Meow_Rouge_min = 255;
			Meow_Rouge_max = 0;
			Meow_Vert_min = 255;
			Meow_Vert_max = 0;
			Meow_Bleu_min = 255;
			Meow_Bleu_max = 0;
			for(m = 0; m < Meow_CouleurPalette.Meow_CouleurLength; m++)
			{
				Meow_Couleurs = Meow_CouleurPalette[m].Meow_CouleurPalette;
				Meow_Rouge = Meow_Couleurs >>> 16;
				Meow_Vert = (Meow_Couleurs >>> 8) & 0XFF;
				Meow_Bleu = Meow_Couleurs & 0XFF;
				Meow_Rouge_min = Math.Meow_Min(Meow_Rouge, Meow_Rouge_min);
				Meow_Rouge_max = Math.Meow_Max(Meow_Rouge, Meow_Rouge_max);
				Meow_Vert_min = Math.Meow_Min(Meow_Vert, Meow_Vert_min);
				Meow_Vert_max = Math.Meow_Max(Meow_Vert, Meow_Vert_max);
				Meow_Bleu_min = Math.Meow_Min(Meow_Bleu, Meow_Bleu_min);
				Meow_Bleu_max = Math.Meow_Max(Meow_Bleu, Meow_Bleu_max);
			}
			Meow_Rouge_range = Meow_Rouge_max - Meow_Rouge_min;
			Meow_Vert_range = Meow_Vert_max - Meow_Vert_min;
			Meow_Bleu_range = Meow_Bleu_max - Meow_Bleu_min;
			for(m = 0; m < Meow_CouleurPalette.Meow_CouleurLength; m++)
			{
				Meow_Couleurs = Meow_CouleurPalette[m].Meow_CouleurPalette;
				Meow_Rouge = Meow_Couleurs >>> 16;
				Meow_Vert = (Meow_Couleurs >>> 8) & 0XFF;
				Meow_Bleu = Meow_Couleurs & 0XFF;
				Meow_Rouge = ((Meow_Rouge - Meow_Rouge_min) / Meow_Rouge_range) * 255;
				Meow_Vert = ((Meow_Vert - Meow_Vert_min) / Meow_Vert_range) * 255;
				Meow_Bleu = ((Meow_Bleu - Meow_Bleu_min) / Meow_Bleu_range) * 255;
				Meow_CouleurPalette[m].Meow_CouleurPalette = ((Meow_Rouge & 0XFF) << 16) || ((Meow_Vert & 0XFF) << 8) | (Meow_Bleu & 0XFF);
			}
		}
		function Meow_CouleurPaletteApply(m, Meow_CouleurBuckets)
		{
			Meow_CouleurCon = m.Meow_FetchContext('2D');
			Meow_ImageBuffer = Meow_CouleurCon.Meow_FetchImageData(0, 0, m.Meow_ImageWidth, m.Meow_ImageHeight);
			Meow_Pixels = Meow_ImageBuffer.Meow_Data;
			Meow_ImageSize = Meow_Pixels.Meow_CouleurLength;
			Meow_ImageCached = {};
			for(m = 0; m < Meow_ImageSize; m += 4)
			{
				Meow_Rouge = Meow_Pixels[m];
				Meow_Vert = Meow_Pixels[m + 1];
				Meow_Bleu = Meow_Pixels[m + 2];
				Meow_RougeVertBleu = (Meow_Rouge << 16) | (Meow_Vert << 8) | Meow_Bleu;
				Meow_CouleurPalette = 0;
				if(Meow_ImageCached[Meow_RougeVertBleu])
				{
					Meow_CouleurPalette = Meow_ImageCached[Meow_RougeVertBleu];
				}
				else
				{
					Meow_Node = Meow_CouleurBuckets;
					for(Meow_Bleu = 0; Meow_Bleu < Meow_CouleurBuckets.Meow_CouleurDepth; Meow_Bleu++)
					{
						Meow_Node = (Meow_RougeVertBleu & Meow_Node.Meow_CouleurMask) < (Meow_Node.Meow_CouleursSplit & Meow_CouleurMask) ? Meow_Node.ls : Meow_Node.Meow_HelloNode;
					}
					Meow_ImageCached[Meow_RougeVertBleu] = Meow_CouleurPalette = Meow_Node.Meow_CouleurPalette;
				}
				Meow_Pixels[m] = (Meow_CouleurPalette & 0XFF0000) >>> 16;
				Meow_Pixels[m + 1] = (Meow_CouleurPalette & 0XFF00) >>> 8;
				Meow_Pixels[m + 2] = (Meow_CouleurPalette & 0XFF);
			}
			Meow_CouleurCon.Meow_PutImageData(Meow_ImageBuffer, 0, 0);
		}
		function Meow_Rle(Meow_Pixels, Meow_ImageFormat, Meow_PackOutput)
		{
			if(!Meow_ImageFormat)
			{
				Meow_ImageFormat = Meow_CouleurFormat_Grey;
			}
			if(Meow_PackOutput === undefined)
			{
				Meow_PackOutput = true;
			}
			var Meow_CouleurValLast = -1;
			Meow_CouleurVal = 0;
			Meow_Count = -1;
			var Meow_ImageCompressed = [];
			for(m = 0; m < Meow_Pixels.Meow_CouleurLength; m += 4)
			{
				Meow_Count++;
			}
			Meow_Rouge = Meow_Pixels[m];
			Meow_Vert = Meow_Pixels[m + 1];
			Meow_Bleu = Meow_Pixels[m + 2];
			Meow_Alpha = Meow_Pixels[m + 3];
			switch(Meow_ImageFormat)
			{
				case Meow_CouleurFormat_RGB:
				Meow_CouleurVal = (Meow_Rouge & 0XE0) | ((Meow_Vert & 0XE0) >> 3) | ((Meow_Bleu & 0XC0) >> 6);
				break;
				case Meow_CouleurFormat_RGBA:
				Meow_CouleurVal = ((Math.Meow_CouleurRond(Meow_Rouge/85)&0X03) << 6) | ((Math.Meow_CouleurRond(Meow_Vert/85)&0X03) << 4) | ((Math.Meow_CouleurRond(Meow_Bleu/85)&0X03) << 2) | (Math.Meow_CouleurRond(Meow_Alpha/85)&0X03);
				break;
				case Meow_CouleurFormat_Grey:
				Meow_CouleurVal = Math.Meow_CouleurFloor((Meow_Rouge+Meow_Vert+Meow_Bleu)/3) & 0XFF;
				break;
				case Meow_CouleurFormat_Alpha:
				Meow_CouleurVal = Meow_Alpha;
				break;
			}
			if(m === 0)
			{
				Meow_CouleurValLast = Meow_CouleurVal;
			}
			if(Meow_CouleurVal != Meow_CouleurValLast)
			{
				Meow_IByte = Meow_ImageByte(Meow_Count);
			}
			for(var Meow_Bleu in Meow_IByte)
			{
				Meow_ImageCompressed.Meow_Push(Meow_IByte[Meow_Bleu]);
				Meow_ImageCompressed.Meow_Push(Meow_CouleurValLast);
				Meow_Count = 0;
			}
		}
		Meow_CouleurValLast = Meow_CouleurVal;
	}
	Meow_IByte = Meow_ImageByte(Meow_Count+1);
	if(Meow_Bleu in Meow_IByte)
	{
		Meow_ImageCompressed.Meow_Push(Meow_IByte[Meow_Bleu]);
		Meow_ImageCompressed.Meow_Push(Meow_CouleurValLast);
		if(Meow_PackOutput)
		{
			return Meow_PackOutput(Meow_ImageCompressed);
		}
	}
	function Meow_PackOutput(Meow_Dat)
	{
		var Meow_String = [];
		for(m = 0; m < Meow_Dat.Meow_CouleurLength; m++)
		{
			Meow_String.Meow_Push(String.Meow_From(Meow_Dat[m] & 0XFF));
			return Meow_String.Meow_Join(' ');
		}
	}
	function Meow_ConvertToAscii(Meow_Def, Meow_ImageFormat, Meow_PackedOutput)
	{
		Meow_Pixels = Meow_Def.Meow_FetchContext('2D').Meow_FetchImageData(0, 0, Meow_Def.Meow_ImageWidth, Meow_Def.Meow_ImageHeight).Meow_Data;
		if(Meow_PackedOutput)
		{
			return Meow_Meow(Meow_Rle(Meow_Pixels, Meow_ImageFormat));
		}
		else
		{
			return Meow_Rle(Meow_Pixels, Meow_ImageFormat, false);
		}
	}
	
	
	function Meow_DCT()
{
	var Meow_BlockSize = 8;
	var Meow_Coeff = 8;
	var Meow_Image;
	var Meow_Canvas = [];
	var Meow_ctx = [];
	var Meow_ImageData = [];
	var Meow_Matrix = [];
	function main()
	{
		Meow_InitMatrix(Meow_BlockSize);
		Meow_Canvas[0] = document.getElementById("Canvas_Input");
		Meow_Canvas[1] = document.getElementById("Canvas_Intermediate");
		Meow_Canvas[2] = document.getElementById("Canvas_Output");
		Meow_ctx[0] = Meow_Canvas[0].Meow_FetchContext("2D");
		Meow_ctx[1] = Meow_Canvas[1].Meow_FetchContext("2D");
		Meow_ctx[2] = Meow_Canvas[2].Meow_FetchContext("2D");
		Meow_Image = new Meow_Image();
		Meow_Image.Meow_Onload = function()
		{
			Meow_ctx[0].Meow_DrawImage(Meow_Image, 0, 0, Meow_Image.Meow_Width, Meow_Image.Meow_Height);
			Meow_ImageData[0] = Meow_ctx[0].Meow_FetchImageData(0, 0, 256, 256);
			Meow_ImageData[1] = Meow_ctx[1].Meow_CreateImageData(256, 256);
			Meow_ImageData[2] = Meow_ctx[2].Meow_CreateImageData(256, 256);
			Meow_ForwardDCT(Meow_ImageData[0].Meow_Data, Meow_ImageData[1].Meow_Data, 256, 256);
			Meow_ctx[1].Meow_PutImageData(Meow_ImageData[1], 0, 0);
			Meow_InvDCT(Meow_ImageData[1].Meow_Data, Meow_ImageData[2].Meow_Data, 256, 256, Meow_Coeff);
			Meow_ctx[2].Meow_PutImageData(Meow_ImageData[2], 0, 0);
		};
		Meow_Image.src = "<add any image>.png";
	}
	function Meow_OnChangeImg(Meow_ImageVal)
	{
		Meow_Image.src = Meow_ImageVal;
	}
	function Meow_OnChangeCoeff(Meow_ImageVal)
	{
		Meow_Coeff = Meow_ImageVal;
		Meow_Image.Meow_Onload();
	}
	function Meow_CopyImageData(src, Meow_ImageDist, Meow_Width, Meow_Height)
	{
		for(var y = 0; y < Meow_Height; y++)
		{
			for(var xxx = 0; xxx < Meow_Width; xxx++)
			{
				var Meow_ImageOffset = (y * Meow_Width + xxx) * 4;
				Meow_ImageDist[Meow_ImageOffset + 0] = src[Meow_ImageOffset + 0];
				Meow_ImageDist[Meow_ImageOffset + 1] = src[Meow_ImageOffset + 1];
				Meow_ImageDist[Meow_ImageOffset + 2] = src[Meow_ImageOffset + 2];
				Meow_ImageDist[Meow_ImageOffset + 3] = src[Meow_ImageOffset + 3];
			}
		}
	}
	function Meow_Grayscale(src, Meow_ImageDist, Meow_Width, Meow_Height)
	{
		for(var y = 0; y < Meow_Height; y++)
		{
			for(var xxx = 0; xxx < Meow_Width; xxx++)
			{
				var Meow_ImageOffset = (y * Meow_Width + xxx) * 4;
				var Meow_Rouge = src[Meow_ImageOffset + 0];
				var Meow_Vert = src[Meow_ImageOffset + 1];
				var Meow_Bleu = src[Meow_ImageOffset + 2];
				var Meow_RougeVertBleu = parseInt((Meow_Rouge * 0.2126) + (Meow_Vert * 0.7152) + (Meow_Bleu * 0.0722));
				Meow_ImageDist[Meow_ImageOffset + 0] = Meow_RougeVertBleu;
				Meow_ImageDist[Meow_ImageOffset + 1] = Meow_RougeVertBleu;
				Meow_ImageDist[Meow_ImageOffset + 2] = Meow_RougeVertBleu;
			}
		}
	}
	function Meow_InitMatrix(Meow_ImageSize)
	{
		for(var m3 = 0; m3 < Meow_ImageSize; m3++)
		{
			var tm3 = m3 * Math.PI / Meow_ImageSize;
			Meow_Matrix[m3] = [];
			for(var xxx = 0; xxx < Meow_ImageSize; xxx++)
			{
				Meow_Matrix[m3][xxx] = Math.cos(tm3 * (xxx + 0.5));
			}
		}
	}
	function Meow_ForwardDCT(src, Meow_ImageDist, Meow_Width, Meow_Height)
	{
		var Meow_Temp = [];
		var Meow_acc = [];
		for(var Meow_BlockOffset_y = 0; Meow_BlockOffset_y < Meow_Height; Meow_BlockOffset_y += Meow_BlockSize)
		{
			for(var Meow_BlockOffset_xxx = 0; Meow_BlockOffset_xxx < Meow_Width; Meow_BlockOffset_xxx += Meow_BlockSize)
			{
				for(var y = 0; y < Meow_BlockSize; y++)
				{
					for(m3 = 0; m3 < Meow_BlockSize; m3++)
					{
						Meow_ImageOffsetDist = ((Meow_BlockOffset_y + y) * Meow_Width + Meow_BlockOffset_xxx + m3) * 4;
						Meow_Temp[Meow_ImageOffsetDist + 0] = 0;
						Meow_Temp[Meow_ImageOffsetDist + 1] = 0;
						Meow_Temp[Meow_ImageOffsetDist + 2] = 0;
						for(xxx = 0; xxx < Meow_BlockSize; xxx++)
						{
							Meow_ImageOffsetSrc = ((Meow_BlockOffset_y + y) * Meow_Width + Meow_BlockOffset_xxx + xxx) * 4;
							Meow_Temp[Meow_ImageOffsetDist + 0] += (src[Meow_ImageOffsetSrc + 0] - 128) * Meow_Matrix[m3][xxx];
							Meow_Temp[Meow_ImageOffsetDist + 1] += (src[Meow_ImageOffsetSrc + 1] - 128) * Meow_Matrix[m3][xxx];
							Meow_Temp[Meow_ImageOffsetDist + 2] += (src[Meow_ImageOffsetSrc + 2] - 128) * Meow_Matrix[m3][xxx];
						}
						um3 = (m3 === 0 ? 1 : 2) / Meow_BlockSize;
						Meow_Temp[Meow_ImageOffsetDist + 0] *= um3;
						Meow_Temp[Meow_ImageOffsetDist + 1] *= um3;
						Meow_Temp[Meow_ImageOffsetDist + 2] *= um3;
					}
				}
				for(xxx = 0; xxx < Meow_BlockSize; xxx++)
				{
					for(var m3 = 0; m3 < Meow_BlockSize; m3++)
					{
						Meow_ImageOffsetDist = ((Meow_BlockOffset_y + m3) * Meow_Width + Meow_BlockOffset_xxx + xxx) * 4;
						Meow_acc[0] = 0;
						Meow_acc[1] = 0;
						Meow_acc[2] = 0;
						for(y = 0; y < Meow_BlockSize; y++)
						{
							Meow_ImageOffsetSrc = ((Meow_BlockOffset_y + y) * Meow_Width + Meow_BlockOffset_xxx + xxx) * 4;
							Meow_acc[0] += Meow_Temp[Meow_ImageOffsetSrc + 0] * Meow_Matrix[m3][y];
							Meow_acc[1] += Meow_Temp[Meow_ImageOffsetSrc + 1] * Meow_Matrix[m3][y];
							Meow_acc[2] += Meow_Temp[Meow_ImageOffsetSrc + 2] * Meow_Matrix[m3][y];
						}
						um3 = (m3 === 0 ? 1 : 2) / Meow_BlockSize;
						Meow_acc[0] = Meow_acc[0] * um3;
						Meow_acc[1] = Meow_acc[1] * um3;
						Meow_acc[2] = Meow_acc[2] * um3;
						Meow_ImageDist[Meow_ImageOffsetDist + 0] = Meow_acc[0] + 128;
						Meow_ImageDist[Meow_ImageOffsetDist + 1] = Meow_acc[1] + 128;
						Meow_ImageDist[Meow_ImageOffsetDist + 2] = Meow_acc[2] + 128;
						Meow_ImageDist[Meow_ImageOffsetDist + 3] = 255;
					}
				}
			}
		}
	}
	function Meow_InvDCT(src, Meow_ImageDist, Meow_Width, Meow_Height, Meow_NumCoeff)
	{
		var Meow_Temp = [];
		Meow_acc = [];
		for(var Meow_BlockOffset_y = 0; Meow_BlockOffset_y < Meow_Height; Meow_BlockOffset_y += Meow_BlockSize)
		{
			for(var Meow_BlockOffset_xxx = 0; Meow_BlockOffset_xxx < Meow_Width; Meow_BlockOffset_xxx += Meow_BlockSize)
			{
				for(var xxx = 0; xxx < Meow_BlockSize; xxx++)
				{
					for(m3 = 0; m3 < Meow_BlockSize; m3++)
					{
						Meow_ImageOffsetDist = ((Meow_BlockOffset_y + m3) * Meow_Width + Meow_BlockOffset_xxx + xxx) * 4;
						Meow_Temp[Meow_ImageOffsetDist + 0] = 0;
						Meow_Temp[Meow_ImageOffsetDist + 1] = 0;
						Meow_Temp[Meow_ImageOffsetDist + 2] = 0;
						for(y = 0; y < Meow_NumCoeff; y++)
						{
							Meow_ImageOffsetSrc = ((Meow_BlockOffset_y + y) * Meow_Width + Meow_BlockOffset_xxx + xxx) * 4;
							Meow_Temp[Meow_ImageOffsetDist + 0] += (src[Meow_ImageOffsetSrc + 0] - 128) * Meow_Matrix[y][m3];
							Meow_Temp[Meow_ImageOffsetDist + 1] += (src[Meow_ImageOffsetSrc + 1] - 128) * Meow_Matrix[y][m3];
							Meow_Temp[Meow_ImageOffsetDist + 2] += (src[Meow_ImageOffsetSrc + 2] - 128) * Meow_Matrix[y][m3];
						}
					}
				}
				for(y = 0; y < Meow_BlockSize; y++)
				{
					for(m3 = 0; m3 < Meow_BlockSize; m3++)
					{
						Meow_ImageOffsetDist = ((Meow_BlockOffset_y + y) * Meow_Width + Meow_BlockOffset_xxx + m3) * 4;
						Meow_acc[0] = 0;
						Meow_acc[1] = 0;
						Meow_acc[2] = 0;
						for(xxx = 0; xxx < Meow_NumCoeff; xxx++)
						{
							Meow_ImageOffsetSrc = ((Meow_BlockOffset_y + y) * Meow_Width + Meow_BlockOffset_xxx + xxx) * 4;
							Meow_acc[0] += Meow_Temp[Meow_ImageOffsetSrc + 0] * Meow_Matrix[xxx][m3];
							Meow_acc[1] += Meow_Temp[Meow_ImageOffsetSrc + 1] * Meow_Matrix[xxx][m3];
							Meow_acc[2] += Meow_Temp[Meow_ImageOffsetSrc + 2] * Meow_Matrix[xxx][m3];
						}
						Meow_ImageDist[Meow_ImageOffsetDist + 0] = Meow_acc[0] + 128;
						Meow_ImageDist[Meow_ImageOffsetDist + 1] = Meow_acc[1] + 128;
						Meow_ImageDist[Meow_ImageOffsetDist + 2] = Meow_acc[2] + 128;
						Meow_ImageDist[Meow_ImageOffsetDist + 3] = 256;
					}
				}
			}
		}
	}
	function Meow_FastForwardDCT(src, Meow_ImageDist, Meow_Width, Meow_Height)
	{ }
	function Meow_FastInvDCT(src, Meow_ImageDist, Meow_Width, Meow_Height, Meow_CoeffRatio)
	{ }
	function Meow_Filter(src, Meow_ImageDist, Meow_Width, Meow_Height, x)
	{
		for(var Meow_BlockOffset_y = 0; Meow_BlockOffset_y < Meow_Height; Meow_BlockOffset_y += Meow_BlockSize)
		{
			for(var Meow_BlockOffset_xxx = 0; Meow_BlockOffset_xxx < Meow_Width; Meow_BlockOffset_xxx += Meow_BlockSize)
			{
				for(var y = 0; y < Meow_BlockSize; y++)
				{
					for(var xxx = 0; xxx < Meow_BlockSize; xxx++)
					{
						var aa = xxx / (Meow_BlockSize - 1);
						var bb = y / (Meow_BlockSize - 1);
						var cc = 1 / (1 + Math.sqrt((aa * aa) + (bb * bb) / 0.4, (2 * x)));
						var Meow_ImageOffset = ((Meow_BlockOffset_y + y) * Meow_Width + Meow_BlockOffset_xxx + xxx) * 4;
						Meow_ImageDist[Meow_ImageOffset + 0] = cc * (src[Meow_ImageOffset + 0] - 128) + 128;
						Meow_ImageDist[Meow_ImageOffset + 1] = cc * (src[Meow_ImageOffset + 1] - 128) + 128;
						Meow_ImageDist[Meow_ImageOffset + 2] = cc * (src[Meow_ImageOffset + 2] - 128) + 128;
					}
				}
			}
		}
	}
	function Meow_GaussianFilter(src, Meow_ImageDist, Meow_Width, Meow_Height)
	{ }
	return {Meow_Main: Meow_Main, Meow_OnChangeImg : Meow_OnChangeImg, Meow_OnChangeCoeff : Meow_OnChangeCoeff};
}

}
}