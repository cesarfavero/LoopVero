# `getOmittedSkillDirectories`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/skill-catalog-budget.js` · [README do módulo](../../../../../modules/agent-engine/prompts/skill-catalog-budget-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639553-639562](../../../../../../reference/runtime/host-main.cjs#L639553-L639562) | `FunctionDeclaration` | não | `skills` |
| [evaluation:430167-430176](../../../../../../reference/runtime/sand-eval-runner.cjs#L430167-L430176) | `FunctionDeclaration` | não | `skills` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639553-639562](../../../../../../reference/runtime/host-main.cjs#L639553-L639562) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:430167-430176](../../../../../../reference/runtime/sand-eval-runner.cjs#L430167-L430176) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:639553

Chamadas escritas diretamente neste corpo: `directories.add`, `getSkillDirectoryHint`, `new Set`.

SHA-256 do trecho: `c627c356f7a9c1794323fdd77c224cb0d67e1a0aa337fdc88de79ada846d86a7`.

### evaluation:430167

Chamadas escritas diretamente neste corpo: `directories.add`, `getSkillDirectoryHint`, `new Set`.

SHA-256 do trecho: `c627c356f7a9c1794323fdd77c224cb0d67e1a0aa337fdc88de79ada846d86a7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
