# `renderAvailableSecureValues`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/secure-values/list-available-secure-values-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/list-available-secure-values-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:767209-767243](../../../../../../../../reference/runtime/host-main.cjs#L767209-L767243) | `FunctionDeclaration` | não | `metadata2, options2` |
| [evaluation:562728-562762](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562728-L562762) | `FunctionDeclaration` | não | `metadata2, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767209-767243](../../../../../../../../reference/runtime/host-main.cjs#L767209-L767243) | 5 | 3 | 0 | 2 | 0 | 0 |
| [evaluation:562728-562762](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562728-L562762) | 5 | 3 | 0 | 2 | 0 | 0 |

### host:767209

Chamadas escritas diretamente neste corpo: `.sort`, `anySite.push`, `grouped.get`, `grouped.set`, `lines2.join`, `lines2.push`, `listedDomains`, `listedValueLines`, `new Map`, `new Set`, `returnedNames.add`, `secureValueFillsAnySite`.

SHA-256 do trecho: `10d887a2c943a209ac7fc7f998929ce29d5328f60588c36e593bc247b8ed826d`.

### evaluation:562728

Chamadas escritas diretamente neste corpo: `.sort`, `anySite.push`, `grouped.get`, `grouped.set`, `lines2.join`, `lines2.push`, `listedDomains`, `listedValueLines`, `new Map`, `new Set`, `returnedNames.add`, `secureValueFillsAnySite`.

SHA-256 do trecho: `10d887a2c943a209ac7fc7f998929ce29d5328f60588c36e593bc247b8ed826d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
