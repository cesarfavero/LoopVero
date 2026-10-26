# `isProviderCapacityError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/transient-stream-error.ts` · [README do módulo](../../../../../modules/core/runner/transient-stream-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736333-736336](../../../../../../reference/runtime/host-main.cjs#L736333-L736336) | `FunctionDeclaration` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736333-736336](../../../../../../reference/runtime/host-main.cjs#L736333-L736336) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:736333

Chamadas escritas diretamente neste corpo: `hasProviderCapacitySignal`, `isRetryableProviderError`, `new Set`.

SHA-256 do trecho: `25160daeb66f437d7a13bfada50751efe09a6e44c592c0fb4615ef3ffb39bd2c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
