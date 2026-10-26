# `createPrivacyModeService/reconcileAuth`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/privacy-mode/privacy-mode-service.ts` · [README do módulo](../../../../../../modules/host/extensions/privacy-mode/privacy-mode-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:706545-706564](../../../../../../../reference/runtime/host-main.cjs#L706545-L706564) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706545-706564](../../../../../../../reference/runtime/host-main.cjs#L706545-L706564) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:706545

Chamadas escritas diretamente neste corpo: `activeRefresh.abort`, `auth2.peekAccessToken`, `publish`, `readAuth`, `refresh`.

Alvos de atribuição ou incremento: `activeAuth`, `activeRefresh`, `generation`.

SHA-256 do trecho: `29f64725792e6f68b259fdda3781a7e90068dd3c389bc4e3706f3b989bce4328`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
