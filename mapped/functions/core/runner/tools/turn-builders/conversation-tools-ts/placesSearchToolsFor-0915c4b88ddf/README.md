# `placesSearchToolsFor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/conversation-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/conversation-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769256-769268](../../../../../../../../reference/runtime/host-main.cjs#L769256-L769268) | `FunctionDeclaration` | não | `host, renderCards` |
| [evaluation:564903-564915](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564903-L564915) | `FunctionDeclaration` | não | `host, renderCards` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769256-769268](../../../../../../../../reference/runtime/host-main.cjs#L769256-L769268) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:564903-564915](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564903-L564915) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:769256

Chamadas escritas diretamente neste corpo: `createPlacesSearchTool`, `host.gates.placesCard`, `host.gates.webSearchDisabled`.

SHA-256 do trecho: `dc97e858290307cff7ad9aa27479b5755b842e7ea6a5af1e51f201203094370a`.

### evaluation:564903

Chamadas escritas diretamente neste corpo: `createPlacesSearchTool`, `host.gates.placesCard`, `host.gates.webSearchDisabled`.

SHA-256 do trecho: `dc97e858290307cff7ad9aa27479b5755b842e7ea6a5af1e51f201203094370a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
