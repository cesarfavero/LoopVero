# `commandTrace`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/gateway-server.ts` · [README do módulo](../../../../modules/host/gateway-server-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:493523-493529](../../../../../reference/runtime/host-main.cjs#L493523-L493529) | `FunctionDeclaration` | não | `req` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493523-493529](../../../../../reference/runtime/host-main.cjs#L493523-L493529) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:493523

Chamadas escritas diretamente neste corpo: `Array.isArray`, `parseTraceparent`.

SHA-256 do trecho: `75b270e97937f633e3c7a83b0ab30ae670eb19c68e3a39b269d4a38d492669ea`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
