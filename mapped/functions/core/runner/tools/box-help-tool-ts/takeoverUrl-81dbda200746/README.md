# `takeoverUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/box-help-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/box-help-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:725279-725288](../../../../../../../reference/runtime/host-main.cjs#L725279-L725288) | `FunctionDeclaration` | não | `raw` |
| [evaluation:560365-560374](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560365-L560374) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725279-725288](../../../../../../../reference/runtime/host-main.cjs#L725279-L725288) | 3 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:560365-560374](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560365-L560374) | 3 | 0 | 0 | 3 | 0 | 1 |

### host:725279

Chamadas escritas diretamente neste corpo: `new URL`, `raw.trim`, `value.includes`.

SHA-256 do trecho: `510fd72acfe20e0d3626ed2ee8c66878ef71296cef8a16534e2bb58681e792c6`.

### evaluation:560365

Chamadas escritas diretamente neste corpo: `new URL`, `raw.trim`, `value.includes`.

SHA-256 do trecho: `510fd72acfe20e0d3626ed2ee8c66878ef71296cef8a16534e2bb58681e792c6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
