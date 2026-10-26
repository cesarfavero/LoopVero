# `holdsLink`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/no-follow-walk.ts` · [README do módulo](../../../../modules/host/no-follow-walk-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453642-453648](../../../../../reference/runtime/host-main.cjs#L453642-L453648) | `FunctionDeclaration` | sim | `entry` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453642-453648](../../../../../reference/runtime/host-main.cjs#L453642-L453648) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:453642

Chamadas escritas diretamente neste corpo: `.catch`, `info2.isSymbolicLink`.

SHA-256 do trecho: `a1774abf0120f9371bc6dbc81105b9a7c3dfbf08baa0d22b4b8b05726baa79cc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
