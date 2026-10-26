# `SkillCommands.watchSessionSkills`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/skill-commands.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/skill-commands-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:740268-740273](../../../../../../../reference/runtime/host-main.cjs#L740268-L740273) | `method` | não | `session` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740268-740273](../../../../../../../reference/runtime/host-main.cjs#L740268-L740273) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:740268

Chamadas escritas diretamente neste corpo: `session.skills.setOnChange`, `this.watchedSkills.setOnChange`.

Alvos de atribuição ou incremento: `this.watchedSkills`.

SHA-256 do trecho: `14234adfb54a730f9b682153deb2257e623fef9f6094e653003ac93e17ca03e3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
