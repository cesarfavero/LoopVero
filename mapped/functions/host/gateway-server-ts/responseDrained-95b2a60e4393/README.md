# `responseDrained`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/gateway-server.ts` · [README do módulo](../../../../modules/host/gateway-server-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:493686-493699](../../../../../reference/runtime/host-main.cjs#L493686-L493699) | `FunctionDeclaration` | não | `res` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493686-493699](../../../../../reference/runtime/host-main.cjs#L493686-L493699) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:493686

Chamadas escritas diretamente neste corpo: `Promise.resolve`, `new Promise`.

SHA-256 do trecho: `10dc19d6e2b35a49496eb910c343027c92eb34a13445fa74c177e1cf2487cede`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
