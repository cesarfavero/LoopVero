# `argIssueFolder`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/communicate-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:725089-725100](../../../../../../../reference/runtime/host-main.cjs#L725089-L725100) | `FunctionDeclaration` | não | `knownFields` |
| [evaluation:480060-480071](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480060-L480071) | `FunctionDeclaration` | não | `knownFields` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725089-725100](../../../../../../../reference/runtime/host-main.cjs#L725089-L725100) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480060-480071](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480060-L480071) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:725089

Chamadas escritas diretamente neste corpo: `brandLiteralEnum`, `brandedEnumOf`.

SHA-256 do trecho: `864117a4517ecd25f57541e19be070789f0ff51b42bf0c68ab356807985681ce`.

### evaluation:480060

Chamadas escritas diretamente neste corpo: `brandLiteralEnum`, `brandedEnumOf`.

SHA-256 do trecho: `ba395de40af9b327d1ffb078790c2ab94158b78f893d229c2448944beb4b194a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
