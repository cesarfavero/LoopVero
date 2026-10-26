# `readSandDataFileSync`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453758-453761](../../../../../reference/runtime/host-main.cjs#L453758-L453761) | `FunctionDeclaration` | não | `path33` |
| [evaluation:627500-627503](../../../../../reference/runtime/sand-eval-runner.cjs#L627500-L627503) | `FunctionDeclaration` | não | `path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453758-453761](../../../../../reference/runtime/host-main.cjs#L453758-L453761) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627500-627503](../../../../../reference/runtime/sand-eval-runner.cjs#L627500-L627503) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:453758

Chamadas escritas diretamente neste corpo: `openNoFollowSync2`, `readOpenSandDataFile`, `sandDataNoFollowRoot`.

SHA-256 do trecho: `af543339e8bf100c0e832d45176731adeddd22ed5ffb0cdf50592446138f59b8`.

### evaluation:627500

Chamadas escritas diretamente neste corpo: `openNoFollowSync`, `readOpenSandDataFile`, `sandDataNoFollowRoot`.

SHA-256 do trecho: `e38df45ba537fb488668430a2b3540d811a3dfe9dfa1c69a24b305fdcf19b8a1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
