# `toDriverResponse`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/sand-browser-driver-client.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/sand-browser-driver-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724204-724216](../../../../../../../../reference/runtime/host-main.cjs#L724204-L724216) | `FunctionDeclaration` | não | `parsed2` |
| [evaluation:560098-560110](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560098-L560110) | `FunctionDeclaration` | não | `parsed` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724204-724216](../../../../../../../../reference/runtime/host-main.cjs#L724204-L724216) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560098-560110](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560098-L560110) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724204

Chamadas escritas diretamente neste corpo: `booleanField`, `filledControlField`, `nonnegativeNumberField`, `objectFields`, `snapshotMetaField`, `stringField2`.

SHA-256 do trecho: `f59b393728ad694cf2a707e00ed08307e153a55be50b87416fefe308c47a7b53`.

### evaluation:560098

Chamadas escritas diretamente neste corpo: `booleanField`, `filledControlField`, `nonnegativeNumberField`, `objectFields`, `snapshotMetaField`, `stringField2`.

SHA-256 do trecho: `ec65bfd4ae075ccee5e730267834cc273dc194890d7b234eba4fb092a1d38e50`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
