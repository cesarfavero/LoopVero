# `sandTerminalFilePath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `shared/permissions/local-tool-permission-machinery.ts` · [README do módulo](../../../../../modules/shared/permissions/local-tool-permission-machinery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:590162-590165](../../../../../../reference/runtime/host-main.cjs#L590162-L590165) | `FunctionDeclaration` | não | `terminalsFolder, shellId` |
| [evaluation:529927-529930](../../../../../../reference/runtime/sand-eval-runner.cjs#L529927-L529930) | `FunctionDeclaration` | não | `terminalsFolder, shellId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:590162-590165](../../../../../../reference/runtime/host-main.cjs#L590162-L590165) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:529927-529930](../../../../../../reference/runtime/sand-eval-runner.cjs#L529927-L529930) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:590162

Chamadas escritas diretamente neste corpo: `normalizeSeparators`.

SHA-256 do trecho: `a582a2913a76bbc18ca92d07151fe011a4d843e9148540c455ac78b367c10aab`.

### evaluation:529927

Chamadas escritas diretamente neste corpo: `normalizeSeparators`.

SHA-256 do trecho: `a582a2913a76bbc18ca92d07151fe011a4d843e9148540c455ac78b367c10aab`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
