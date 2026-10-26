# `hasConversationTooLargeSignal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/transient-stream-error.ts` · [README do módulo](../../../../../modules/core/runner/transient-stream-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736270-736285](../../../../../../reference/runtime/host-main.cjs#L736270-L736285) | `FunctionDeclaration` | não | `error64, seen` |
| [evaluation:589962-589977](../../../../../../reference/runtime/sand-eval-runner.cjs#L589962-L589977) | `FunctionDeclaration` | não | `error63, seen` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736270-736285](../../../../../../reference/runtime/host-main.cjs#L736270-L736285) | 5 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:589962-589977](../../../../../../reference/runtime/sand-eval-runner.cjs#L589962-L589977) | 5 | 0 | 0 | 6 | 0 | 0 |

### host:736270

Chamadas escritas diretamente neste corpo: `Array.isArray`, `fields3.errors.some`, `hasConversationTooLargeSignal`, `seen.add`, `seen.has`.

SHA-256 do trecho: `3cce16cf6174b862ad9d382c09e5e68dbdb06fd9c8dfb66d363e30d9f0412041`.

### evaluation:589962

Chamadas escritas diretamente neste corpo: `Array.isArray`, `fields3.errors.some`, `hasConversationTooLargeSignal`, `seen.add`, `seen.has`.

SHA-256 do trecho: `af9640a148966833c09e80e3e3c452365a435b44553f2a548169ee648f9049a8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
