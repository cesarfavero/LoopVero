# `packFailureDetail`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/onepassword-extension-install.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/onepassword-extension-install-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:551227-551238](../../../../../../../reference/runtime/host-main.cjs#L551227-L551238) | `FunctionDeclaration` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:551227-551238](../../../../../../../reference/runtime/host-main.cjs#L551227-L551238) | 9 | 0 | 0 | 3 | 0 | 0 |

### host:551227

Chamadas escritas diretamente neste corpo: `.join`, `.replaceAll`, `.slice`, `.split`, `stderr.trim`.

Alvos de atribuição ou incremento: `exit`.

SHA-256 do trecho: `ae5d2ff3b0adc1308f178f04f498f595384d828fe2f92a98e368aa7f6e9b388b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
