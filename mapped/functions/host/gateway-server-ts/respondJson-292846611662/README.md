# `respondJson`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/gateway-server.ts` · [README do módulo](../../../../modules/host/gateway-server-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:493409-493440](../../../../../reference/runtime/host-main.cjs#L493409-L493440) | `FunctionDeclaration` | não | `res, value, req, gzipOptions = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493409-493440](../../../../../reference/runtime/host-main.cjs#L493409-L493440) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:493409

Chamadas escritas diretamente neste corpo: `Buffer.from`, `JSON.stringify`, `clientAcceptsGzip`, `respondRaw`.

SHA-256 do trecho: `2b4dd226e74c72bcf2e871be51c919e64e5a095784ce2dc9499fdecda16cec86`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
