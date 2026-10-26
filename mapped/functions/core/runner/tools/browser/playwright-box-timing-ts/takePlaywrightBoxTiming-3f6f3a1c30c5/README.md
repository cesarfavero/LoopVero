# `takePlaywrightBoxTiming`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/playwright-box-timing.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/playwright-box-timing-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:743099-743116](../../../../../../../../reference/runtime/host-main.cjs#L743099-L743116) | `FunctionDeclaration` | não | `result` |
| [evaluation:515950-515967](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515950-L515967) | `FunctionDeclaration` | não | `result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743099-743116](../../../../../../../../reference/runtime/host-main.cjs#L743099-L743116) | 4 | 0 | 0 | 4 | 0 | 1 |
| [evaluation:515950-515967](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515950-L515967) | 4 | 0 | 0 | 4 | 0 | 1 |

### host:743099

Chamadas escritas diretamente neste corpo: `Object.keys`, `boxTimingSchema.safeParse`, `new Struct`, `raw.toJson`.

Alvos de atribuição ou incremento: `json3`, `success2.structuredContent`.

SHA-256 do trecho: `73ae997197b3924846bf35f401d23127ae56336dbc4bad7f3dff8e8762484538`.

### evaluation:515950

Chamadas escritas diretamente neste corpo: `Object.keys`, `boxTimingSchema.safeParse`, `new Struct`, `raw.toJson`.

Alvos de atribuição ou incremento: `json3`, `success2.structuredContent`.

SHA-256 do trecho: `efe703ec58411ec58221cb228a548fccc769d59cb5b25c1f2001ac5fe8655e00`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
