# `normalizePromptArtifactsDir`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/shared.js` · [README do módulo](../../../../../modules/agent-engine/prompts/shared-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:636135-636140](../../../../../../reference/runtime/host-main.cjs#L636135-L636140) | `FunctionDeclaration` | não | `artifactsDir` |
| [evaluation:424191-424196](../../../../../../reference/runtime/sand-eval-runner.cjs#L424191-L424196) | `FunctionDeclaration` | não | `artifactsDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636135-636140](../../../../../../reference/runtime/host-main.cjs#L636135-L636140) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:424191-424196](../../../../../../reference/runtime/sand-eval-runner.cjs#L424191-L424196) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:636135

Chamadas escritas diretamente neste corpo: `artifactsDir.endsWith`, `artifactsDir.includes`.

SHA-256 do trecho: `7de6f183a552695f4ba7441c723dfd981a27b9a9f1d618893225f1694e63784b`.

### evaluation:424191

Chamadas escritas diretamente neste corpo: `artifactsDir.endsWith`, `artifactsDir.includes`.

SHA-256 do trecho: `7de6f183a552695f4ba7441c723dfd981a27b9a9f1d618893225f1694e63784b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
