# `refuseMcpConfigJson`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/rpc/payload-validators.ts` · [README do módulo](../../../../../modules/shared/rpc/payload-validators-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:487630-487638](../../../../../../reference/runtime/host-main.cjs#L487630-L487638) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487630-487638](../../../../../../reference/runtime/host-main.cjs#L487630-L487638) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:487630

Chamadas escritas diretamente neste corpo: `.encode`, `describeReceived2`, `isUnknownRecord2`, `new TextEncoder`, `parseJsonOrUndefined`, `value.trim`.

SHA-256 do trecho: `284fd7069024adb681eafa6d79f328daad4448bb5375aa6d5a885d78bdd4e313`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
