# `reanchorSandPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `core/host-paths.ts` · [README do módulo](../../../../modules/core/host-paths-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:430924-430934](../../../../../reference/runtime/host-main.cjs#L430924-L430934) | `FunctionDeclaration` | não | `storedPath, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430924-430934](../../../../../reference/runtime/host-main.cjs#L430924-L430934) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:430924

Chamadas escritas diretamente neste corpo: `getSandRootDir`, `isPathWithin`, `sandDataRelativeTail`, `segments.some`, `tail.split`.

SHA-256 do trecho: `facff1d85d2f64e80d9828a5ef3dbf4fc1b608f263bc90436536304d7f088f02`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
