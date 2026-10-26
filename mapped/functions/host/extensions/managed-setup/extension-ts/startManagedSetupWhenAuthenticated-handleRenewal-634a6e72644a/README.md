# `startManagedSetupWhenAuthenticated/handleRenewal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/managed-setup/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/managed-setup/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684124-684131](../../../../../../../reference/runtime/host-main.cjs#L684124-L684131) | `ArrowFunctionExpression` | não | `event` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684124-684131](../../../../../../../reference/runtime/host-main.cjs#L684124-L684131) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:684124

Chamadas escritas diretamente neste corpo: `options2.auth.peekAccessToken`, `options2.refreshManagedSkills`, `start`.

SHA-256 do trecho: `ac00500a379bd425b866e4ea9ad0069504b70280ba742a42401793c112d47f26`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
