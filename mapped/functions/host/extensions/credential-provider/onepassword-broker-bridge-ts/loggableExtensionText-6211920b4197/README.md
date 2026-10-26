# `loggableExtensionText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:549491-549496](../../../../../../../reference/runtime/host-main.cjs#L549491-L549496) | `FunctionDeclaration` | não | `text3, params, maxLength` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:549491-549496](../../../../../../../reference/runtime/host-main.cjs#L549491-L549496) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:549491

Chamadas escritas diretamente neste corpo: `.filter`, `.slice`, `.sort`, `.trim`, `redacted.replace`, `redacted.replaceAll`, `stringLeaves`.

Alvos de atribuição ou incremento: `redacted`.

SHA-256 do trecho: `23847386c732e50bae3f258a08d6a02467ffa34775b45b50705c462d04b10fb3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
