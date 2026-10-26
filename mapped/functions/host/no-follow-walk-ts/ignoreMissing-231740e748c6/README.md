# `ignoreMissing`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/no-follow-walk.ts` · [README do módulo](../../../../modules/host/no-follow-walk-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453670-453672](../../../../../reference/runtime/host-main.cjs#L453670-L453672) | `FunctionDeclaration` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453670-453672](../../../../../reference/runtime/host-main.cjs#L453670-L453672) | 1 | 0 | 0 | 0 | 1 | 0 |

### host:453670

Chamadas escritas diretamente neste corpo: `findSystemErrno`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `ada9bdeec6a9c2e6e60f30f7a45f139d74e315f6d3d9acddafb89f0971b5f753`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
