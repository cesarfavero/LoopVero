# `unexpectedOutputText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/user-desktop-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/user-desktop-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:781768-781772](../../../../../../../../reference/runtime/host-main.cjs#L781768-L781772) | `FunctionDeclaration` | não | `raw` |
| [evaluation:582113-582117](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582113-L582117) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781768-781772](../../../../../../../../reference/runtime/host-main.cjs#L781768-L781772) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:582113-582117](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582113-L582117) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:781768

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `String`, `text3.slice`.

SHA-256 do trecho: `b0fa7ac28168ec7714c626d78491977166ed12acd05bcf0b99213cca16ad1305`.

### evaluation:582113

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `String`, `text3.slice`.

SHA-256 do trecho: `b0fa7ac28168ec7714c626d78491977166ed12acd05bcf0b99213cca16ad1305`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
