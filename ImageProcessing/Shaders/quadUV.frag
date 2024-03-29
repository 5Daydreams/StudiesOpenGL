#version 330 core

// out in frag shaders means its the pixel color output
out vec4 FragColor;

// the "in" keyword means these values are taken from the vertex shader within this particular shader program
in vec2 TexCoords;

uniform float time;

void main()
{
	vec4 color1 = vec4(0.15f, 0.05f, 0.3f + 0.6f * (TexCoords.y), 1.0f);
	vec4 color2 = vec4(0.4f + 0.2f * (TexCoords.y), 0.0f, 0.4f + 0.5f * (TexCoords.y), 1.0f);

	float lerpOctave1 = + 0.2f * sin( 5.0f * TexCoords.x - 2.2f * sin(- 7.0 * TexCoords.y + time));
	float lerpOctave2 = + 0.03f * cos( 23.0f * TexCoords.x - 5f * sin(+ 2.0f * TexCoords.x  - 7.0 * TexCoords.y));

	float lerpValue = 0.9f * TexCoords.y + lerpOctave1 - lerpOctave2;

	FragColor = mix(color1,color2,lerpValue);
}