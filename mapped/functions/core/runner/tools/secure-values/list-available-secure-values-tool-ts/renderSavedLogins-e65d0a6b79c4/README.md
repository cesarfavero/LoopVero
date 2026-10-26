# `renderSavedLogins`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/secure-values/list-available-secure-values-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/list-available-secure-values-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:767244-767256](../../../../../../../../reference/runtime/host-main.cjs#L767244-L767256) | `FunctionDeclaration` | não | `site, logins` |
| [evaluation:562763-562775](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562763-L562775) | `FunctionDeclaration` | não | `site, logins` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767244-767256](../../../../../../../../reference/runtime/host-main.cjs#L767244-L767256) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:562763-562775](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562763-L562775) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:767244

Chamadas escritas diretamente neste corpo: `.join`, `logins.map`.

SHA-256 do trecho: `49871716909e8011f3eea98350c7ceee52128e5fbbb27aa265e0f5593f3a7771`.

### evaluation:562763

Chamadas escritas diretamente neste corpo: `.join`, `logins.map`.

SHA-256 do trecho: `49871716909e8011f3eea98350c7ceee52128e5fbbb27aa265e0f5593f3a7771`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
