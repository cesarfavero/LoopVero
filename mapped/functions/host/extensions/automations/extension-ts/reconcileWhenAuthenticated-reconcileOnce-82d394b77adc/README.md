# `reconcileWhenAuthenticated/reconcileOnce`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/automations/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/automations/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505901-505905](../../../../../../../reference/runtime/host-main.cjs#L505901-L505905) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505901-505905](../../../../../../../reference/runtime/host-main.cjs#L505901-L505905) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:505901

Chamadas escritas diretamente neste corpo: `auth2.peekAccessToken`, `reconcile`.

Alvos de atribuição ou incremento: `hasReconciled`.

SHA-256 do trecho: `9be32c9c69371298af502998ef53c6398edc25c9caaef1d8126cecf4ea938ed2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
