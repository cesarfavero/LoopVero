# `parseOutlookRepliedToMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-route-verification.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:735021-735028](../../../../../../../reference/runtime/host-main.cjs#L735021-L735028) | `FunctionDeclaration` | não | `resultText` |
| [evaluation:540595-540602](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540595-L540602) | `FunctionDeclaration` | não | `resultText` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735021-735028](../../../../../../../reference/runtime/host-main.cjs#L735021-L735028) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:540595-540602](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540595-L540602) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:735021

Chamadas escritas diretamente neste corpo: `isPlainAddress`, `outlookMessageSchema.safeParse`, `parseDraftConnectorRecord`.

SHA-256 do trecho: `acc79177cc032f89b2da43c1ac2cb95c17d3a00c72782f5b4519d2184ab0d38b`.

### evaluation:540595

Chamadas escritas diretamente neste corpo: `isPlainAddress`, `outlookMessageSchema.safeParse`, `parseDraftConnectorRecord`.

SHA-256 do trecho: `95188f8e69743637ad36dc8bab53dea8a78c26abf7522ccde8013930452f9336`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
