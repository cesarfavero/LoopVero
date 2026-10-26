# `isMessagesDecline`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/local-exec/messages-error-classifier.ts` · [README do módulo](../../../../../modules/shared/local-exec/messages-error-classifier-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:770371-770373](../../../../../../reference/runtime/host-main.cjs#L770371-L770373) | `FunctionDeclaration` | não | `error64` |
| [evaluation:569079-569081](../../../../../../reference/runtime/sand-eval-runner.cjs#L569079-L569081) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770371-770373](../../../../../../reference/runtime/host-main.cjs#L770371-L770373) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:569079-569081](../../../../../../reference/runtime/sand-eval-runner.cjs#L569079-L569081) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:770371

Chamadas escritas diretamente neste corpo: `DECLINED_MESSAGES.has`.

SHA-256 do trecho: `1a4a4d1d243f07fea73e3f8f6f26d8e165ea8b09752c9481718c2e02c322e1ca`.

### evaluation:569079

Chamadas escritas diretamente neste corpo: `DECLINED_MESSAGES.has`.

SHA-256 do trecho: `eea586fc91c55660473db97d2b578e58a1f3fc3b070afaf205b726723dc618b6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
