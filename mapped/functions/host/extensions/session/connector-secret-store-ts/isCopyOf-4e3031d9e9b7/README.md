# `isCopyOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/connector-secret-store.ts` · [README do módulo](../../../../../../modules/host/extensions/session/connector-secret-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:719260-719263](../../../../../../../reference/runtime/host-main.cjs#L719260-L719263) | `FunctionDeclaration` | não | `name18, entry` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719260-719263](../../../../../../../reference/runtime/host-main.cjs#L719260-L719263) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:719260

Chamadas escritas diretamente neste corpo: `/^\d+$/.test`, `entry.slice`, `entry.startsWith`.

SHA-256 do trecho: `03f2bfed31a7366726b778ebf6e14b8c35abd7c5443b5e5cf3b0124ef810daa5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
