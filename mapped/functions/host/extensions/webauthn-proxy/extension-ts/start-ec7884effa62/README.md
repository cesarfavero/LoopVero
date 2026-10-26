# `start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/webauthn-proxy/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/webauthn-proxy/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:785331-785350](../../../../../../../reference/runtime/host-main.cjs#L785331-L785350) | `ArrowFunctionExpression` | não | `context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785331-785350](../../../../../../../reference/runtime/host-main.cjs#L785331-L785350) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:785331

Chamadas escritas diretamente neste corpo: `createDeadlinePolicy`, `new SandWebAuthnBridge`.

SHA-256 do trecho: `c9513c5c8e917b71780c2cbad2c221c665db28fc68720d0ec7ef32f610372850`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
