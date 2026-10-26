# `cardHtmlBody`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-connector-results.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732829-732832](../../../../../../../reference/runtime/host-main.cjs#L732829-L732832) | `FunctionDeclaration` | não | `route, draft, options2` |
| [evaluation:540351-540354](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540351-L540354) | `FunctionDeclaration` | não | `route, draft, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732829-732832](../../../../../../../reference/runtime/host-main.cjs#L732829-L732832) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540351-540354](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540351-L540354) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:732829

Chamadas escritas diretamente neste corpo: `emailDraftHtmlBody`, `emailHtmlNonTextTag`, `sameBodyText`.

SHA-256 do trecho: `9720c9c329415a56c3c2ecebfd8885af3426ae803889462d2ed9e2515c006f09`.

### evaluation:540351

Chamadas escritas diretamente neste corpo: `emailDraftHtmlBody`, `emailHtmlNonTextTag`, `sameBodyText`.

SHA-256 do trecho: `9720c9c329415a56c3c2ecebfd8885af3426ae803889462d2ed9e2515c006f09`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
