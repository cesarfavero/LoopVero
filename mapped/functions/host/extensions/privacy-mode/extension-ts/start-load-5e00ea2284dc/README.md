# `start/load`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/privacy-mode/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/privacy-mode/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:706636-706650](../../../../../../../reference/runtime/host-main.cjs#L706636-L706650) | `ArrowFunctionExpression` | sim | `{ auth: lookupAuth, signal }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706636-706650](../../../../../../../reference/runtime/host-main.cjs#L706636-L706650) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:706636

Chamadas escritas diretamente neste corpo: `client.getUserPrivacyMode`, `createSandCursorBackendClient`, `new GetUserPrivacyModeRequest`.

SHA-256 do trecho: `c0937cada53ea7afce9923d17262077322c6d1fd3fd02b65d51c7abf15cd793b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
