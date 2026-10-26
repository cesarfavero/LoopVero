# `decodeJson`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:549477-549485](../../../../../../../reference/runtime/host-main.cjs#L549477-L549485) | `FunctionDeclaration` | não | `raw, maxBytes, log5` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:549477-549485](../../../../../../../reference/runtime/host-main.cjs#L549477-L549485) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:549477

Chamadas escritas diretamente neste corpo: `JSON.parse`, `errorLogTag`, `log5`.

SHA-256 do trecho: `d7cb881b468d7de4cd1fcb6a92faa48a7a794a0a92192efc71ef209b14101d5f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
