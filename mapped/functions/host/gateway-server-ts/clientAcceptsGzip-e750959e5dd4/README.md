# `clientAcceptsGzip`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/gateway-server.ts` · [README do módulo](../../../../modules/host/gateway-server-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:493398-493402](../../../../../reference/runtime/host-main.cjs#L493398-L493402) | `FunctionDeclaration` | não | `req` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493398-493402](../../../../../reference/runtime/host-main.cjs#L493398-L493402) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:493398

Chamadas escritas diretamente neste corpo: `.includes`, `Array.isArray`, `header.join`, `value.toLowerCase`.

SHA-256 do trecho: `933a5b8ee50614a8c74d1191d9a7263e5df9ecf43477a3955e9a84bb1f0c1642`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
