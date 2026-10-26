# `gatesSettled`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/box-reference-docs.ts` · [README do módulo](../../../../../modules/core/runner/box-reference-docs-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:558174-558178](../../../../../../reference/runtime/host-main.cjs#L558174-L558178) | `FunctionDeclaration` | não | `visibility, facts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:558174-558178](../../../../../../reference/runtime/host-main.cjs#L558174-L558178) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:558174

Chamadas escritas diretamente neste corpo: `factRead`, `gates.some`.

SHA-256 do trecho: `b9a4aac0b0715e49121133ae679b0f23874fcea5319b5e70502d8f39f2b643f0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
