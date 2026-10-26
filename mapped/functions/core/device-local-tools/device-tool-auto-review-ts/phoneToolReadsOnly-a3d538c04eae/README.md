# `phoneToolReadsOnly`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/device-local-tools/device-tool-auto-review.ts` · [README do módulo](../../../../../modules/core/device-local-tools/device-tool-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:566188-566190](../../../../../../reference/runtime/sand-eval-runner.cjs#L566188-L566190) | `FunctionDeclaration` | não | `tool` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566188-566190](../../../../../../reference/runtime/sand-eval-runner.cjs#L566188-L566190) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:566188

Chamadas escritas diretamente neste corpo: `Object.hasOwn`.

SHA-256 do trecho: `cdcf3e887ee25c7836c027ee69c28db127327e77b44cae6338ca270f3b8305ce`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
