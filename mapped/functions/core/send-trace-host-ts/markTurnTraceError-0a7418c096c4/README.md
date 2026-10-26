# `markTurnTraceError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `core/send-trace-host.ts` · [README do módulo](../../../../modules/core/send-trace-host-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:528778-528790](../../../../../reference/runtime/sand-eval-runner.cjs#L528778-L528790) | `FunctionDeclaration` | não | `trace2, error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528778-528790](../../../../../reference/runtime/sand-eval-runner.cjs#L528778-L528790) | 2 | 0 | 0 | 1 | 0 | 1 |

### evaluation:528778

Chamadas escritas diretamente neste corpo: `String`, `errorLogTag`, `new Error`, `process.stderr.write`, `trace2.span.recordException`, `trace2.span.setAttribute`, `trace2.span.setStatus`.

SHA-256 do trecho: `1f7cb8e1755715c91d20f99491b6082c8f0be033783e030f44dc960a1560f845`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
