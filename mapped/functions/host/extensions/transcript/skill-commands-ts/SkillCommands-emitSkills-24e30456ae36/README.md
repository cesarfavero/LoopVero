# `SkillCommands.emitSkills`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/skill-commands.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/skill-commands-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:740274-740282](../../../../../../../reference/runtime/host-main.cjs#L740274-L740282) | `method` | não | `session` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740274-740282](../../../../../../../reference/runtime/host-main.cjs#L740274-L740282) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:740274

Chamadas escritas diretamente neste corpo: `limitSurfacedSkills`, `session.skills.listAll`, `this.tm.roster.emitter.emit`, `this.tm.shouldEmitAutomations`.

SHA-256 do trecho: `245c4bac79579fa30b90b4341c7d7ef3ee5c6ddc843cec8da2c73d0c1a1568cd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
