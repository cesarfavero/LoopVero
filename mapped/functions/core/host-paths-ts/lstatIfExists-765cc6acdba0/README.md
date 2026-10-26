# `lstatIfExists`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `core/host-paths.ts` · [README do módulo](../../../../modules/core/host-paths-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:430861-430868](../../../../../reference/runtime/host-main.cjs#L430861-L430868) | `FunctionDeclaration` | sim | `path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430861-430868](../../../../../reference/runtime/host-main.cjs#L430861-L430868) | 1 | 0 | 1 | 2 | 1 | 1 |

### host:430861

Chamadas escritas diretamente neste corpo: `findSystemErrno`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `bbc88d18534dc5375d8229b9bec8e21cd51ca6f43174b92a37542d59269ad52e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
