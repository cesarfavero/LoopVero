# `parseOutlookRepliedToLink`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-route-verification.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:735029-735035](../../../../../../../reference/runtime/host-main.cjs#L735029-L735035) | `FunctionDeclaration` | não | `resultText` |
| [evaluation:540603-540609](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540603-L540609) | `FunctionDeclaration` | não | `resultText` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735029-735035](../../../../../../../reference/runtime/host-main.cjs#L735029-L735035) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:540603-540609](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540603-L540609) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:735029

Chamadas escritas diretamente neste corpo: `OUTLOOK_WEB_HOSTS.has`, `URL.canParse`, `new URL`, `outlookMessageSchema.safeParse`, `parseDraftConnectorRecord`.

SHA-256 do trecho: `43d1bdd6ff127ad5751bcbf01cf9e136444083d4df4ff4a732aab47c75659e05`.

### evaluation:540603

Chamadas escritas diretamente neste corpo: `OUTLOOK_WEB_HOSTS.has`, `URL.canParse`, `new URL`, `outlookMessageSchema.safeParse`, `parseDraftConnectorRecord`.

SHA-256 do trecho: `b29b2d9631b270911a5988d35488c661f09ac6901ff763a449d685b5926d966d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
